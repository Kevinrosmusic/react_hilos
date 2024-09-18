/* eslint-disable react/prop-types */
import "./index.scss";
export const ContentComponent = ({ content }) => {
    return (
        <div className="mt-2">
            <div className="card p-2">
                <div className="card__body">
                    <div dangerouslySetInnerHTML={{ __html: content }}></div>
                </div>
            </div>
        </div>
    );
};
