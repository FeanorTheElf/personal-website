import { PropsWithChildren } from "react";

export default function MainCol(props: PropsWithChildren<{}>) {
    return (<div className="container-fluid mt-2 mt-sm-3 mt-md-4">
        <div className="row justify-content-center">
            <div className="col-12 col-sm-10 col-md-8">
                {props.children}
            </div>
        </div>
    </div>);
}