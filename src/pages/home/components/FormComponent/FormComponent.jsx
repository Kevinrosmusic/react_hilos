/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom";
import axiosInstance from "../../../../api/axios";
import "./index.scss";
export const FormComponent = ({ agreement, body }) => {
    const { cfskey, cfstoken } = useParams();
    const { forms, accept_button_text } = agreement;

    const handleSubmit = (e) => {
        e.preventDefault();
        axiosInstance.post("/threads/token/{cfskey}/{cfstoken}}/agreement/true", body).then((response) => {
            console.log(response);
        });
        alert("Formulario enviado");
    };

    return (
        <div className="card mt-2">
            <div className="card__body">
                <h3>Formulario</h3>
                <form onSubmit={handleSubmit}>
                    {forms.map((form) => (
                        <div key={form.fid} className="mt-2">
                            <h4>{form.title}</h4>
                            {form.questions.map((question) => (
                                <div key={question.qid} className="mt-2">
                                    <label htmlFor={question.qid}>{question.label}</label>
                                    {question.options.map((option) => (
                                        <div className="mt-2" key={option.oid}>
                                            <label htmlFor="">{option.label}</label>
                                            <input type={question.type === "CHECK" ? "checkbox" : question.type} className="form-control" />
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    ))}
                    <div className="center-element">
                        <button type="submit" className="btn" disabled>
                            {accept_button_text}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
