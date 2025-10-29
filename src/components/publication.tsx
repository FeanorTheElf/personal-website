import { PropsWithChildren, PureComponent } from "react";

function publicationDescription(link: string, linkdesc: string | undefined): string {
    if (linkdesc === undefined) {
        if (link.startsWith("https://")) {
            link = link.substring(8);
        }
        if (link.startsWith("www.")) {
            link = link.substring(4);
        }
        if (link.length >= 16) {
            return "on " + link.substring(0, link.indexOf("/"));
        } else {
            return link;
        }
    } else {
        return linkdesc;
    }
}

function isSorted(str: string): boolean {
    for (let i = 1; i < str.length; i += 1) {
        if (str.charCodeAt(i - 1) > str.charCodeAt(i)) {
            return false;
        }
    }
    return true;
}

const datePattern = new RegExp("(?:\(([0-9]{4})\))|(?: ([0-9]{4}), )|(?:\. ([0-9]{4})\.)");
const shorthandPattern = new RegExp("([A-Z]+)([0-9]{2})");

export type PublicationProps = PropsWithChildren<{shorthand: string, link?: string, linkdesc?: string}>;

export function getDate(props: PublicationProps): number | undefined {
    if (typeof(props.children) === "string") {
        let result = datePattern.exec(props.children);
        if (result) {
            for (let i of [1, 2, 3, 4]) {
                if (result[i]) {
                    return parseInt(result[i]);
                }
            }
        }
    }
    return undefined;
}

export default function Publication(props: PublicationProps) {
    let shorthandMatch = shorthandPattern.exec(props.shorthand);
    if (shorthandMatch) {
        let date = getDate(props);
        let shorthandAuthors = shorthandMatch[1];
        if (!isSorted(shorthandAuthors)) {
            return (<div className="alert alert-danger" role="alert">
                {"Invalid Shorthand: Authors " + shorthandAuthors + " not alphabetically sorted"}
            </div>);
        }
        let shorthandDate = parseInt(shorthandMatch[2]) + 2000;
        if (date != undefined && shorthandDate != date) {
            return (<div className="alert alert-danger" role="alert">
                {"Invalid Shorthand: Date " + shorthandDate.toString() + " should be " + date.toString()}
            </div>);
        }
    }
    if (props.link === undefined) {
        return (<tr>
            <td className="table-list-header"><b>{props.shorthand}</b></td>
            <td className="table-list-content">{props.children}</td>
        </tr>);
    } else {
        return (<tr>
            <td className="table-list-header"><b>{props.shorthand}</b><br/><a href={props.link}>{publicationDescription(props.link, props.linkdesc)}</a></td>
            <td className="table-list-content">{props.children}</td>
        </tr>);
    }
}