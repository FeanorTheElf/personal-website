import { Children, Component, PropsWithChildren, ReactElement, ReactNode } from "react";
import CVEntry, { CVEntryProps, getCVEntryDate } from "./cventry";
import Publication, { PublicationProps, getDate as getPublicationDate } from "./publication";

function isReactElement(element: ReactNode): element is ReactElement {
    return element != undefined && element != null && typeof(element) != "string" && typeof(element) != "number" && typeof(element) != "boolean" && typeof(element) != "bigint"
}

export default function ListTable(props: PropsWithChildren<{}>) {
    let displayedList = undefined;
    if (props.children != undefined) {
        let lastDate: number = Infinity;
        displayedList = Children.map(props.children, child => {
            if (isReactElement(child)) {
                let date: number | undefined = undefined;
                if (child.type === CVEntry) {
                    date = getCVEntryDate(child.props as CVEntryProps);
                } else if (child.type === Publication) {
                    date = getPublicationDate(child.props as PublicationProps);
                }
                if (date != undefined && lastDate < date) {
                    let result = (<div className="alert alert-danger" role="alert">
                        {"Invalid Order: Date " + date.toString() + " should come before " + lastDate.toString()}
                    </div>);
                    lastDate = date;
                    return result;
                } else if (date != undefined) {
                    lastDate = date;
                    return child;
                } else {
                    return child;
                }
            }
            return child;
        });
    }
    return (<table className="table" style={{borderCollapse: "separate", borderSpacing: "0.5em 0px"}}>
        <thead className="d-none">
        <tr>
            <th scope="col"></th>
            <th scope="col"></th>
        </tr>
        </thead>
        <tbody>
            {displayedList}
        </tbody>
    </table>);
}