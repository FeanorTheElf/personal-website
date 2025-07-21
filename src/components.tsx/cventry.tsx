import { Component, PropsWithChildren } from "react";

export type CVEntryProps = PropsWithChildren<{from: number, to?: number | "now", detailedDate?: string}>;

export function getCVEntryDate(props: CVEntryProps): number {
    if (props.to === undefined) {
        return props.from;
    } else if (props.to === "now") {
        return Infinity
    } else {
        return props.to as number;
    }
}

export default function CVEntry(props: CVEntryProps) {
    let dateMain = undefined;
    if (props.to != undefined) {
        dateMain = (<b>{props.from.toString() + " - " + props.to.toString()}</b>);
    } else {
        dateMain = (<b>{props.from.toString()}</b>);
    }
    if (props.detailedDate != undefined) {
        return (<tr>
            <td className="row-header-responsive">{dateMain}<br/><i>{props.detailedDate}</i></td>
            <td>{props.children}</td>
        </tr>);
    } else {
        return (<tr>
            <td className="row-header-responsive">{dateMain}</td>
            <td>{props.children}</td>
        </tr>);
    }
}