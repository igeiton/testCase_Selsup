import { ParamValue, model, params } from './interfaces';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
    const [stateModel, setStateModel] = useState(model);
    const [stateParams, setStateParams] = useState(params);
    const [models, setModels] = useState(false);

    function createModel(paramValue: ParamValue, index: number): any {
        const param = params.params[index];

        return (
            <div className="model" key={paramValue.paramId}>
                <label>
                    {param?.name}: {createInput(paramValue, index)}
                </label>
                <div className="params">
                    {models &&
                        JSON.stringify(stateModel.paramValues[index], null, 4)}
                </div>
            </div>
        );
    }

    function createInput(paramValue: ParamValue, index: number): any {
        return (
            <input
                type="text"
                value={paramValue.value}
                onChange={(event) => {
                    setStateModel({
                        ...stateModel,
                        paramValues: changeModelParamValues(
                            index,
                            event.target.value
                        ).model,
                    });
                    setStateParams({
                        ...stateParams,
                        params: changeModelParamValues(
                            index,
                            event.target.value
                        ).params,
                    });
                }}
            />
        );
    }

    function changeModelParamValues(index: number, text: string) {
        model.paramValues[index].value = text;
        params.params[index].type = text;

        return { model: model.paramValues, params: params.params };
    }

    useEffect(() => {
        for (let i = 0; i < stateModel.paramValues.length; i++) {
            stateParams.params[i].type = stateModel.paramValues[i].value;
        }
        setStateParams({
            ...stateParams,
            params: stateParams.params,
        });
    }, [params]);

    return (
        <>
            <section className="models">
                {stateModel.paramValues.map((paramValue, index) =>
                    createModel(paramValue, index)
                )}

                <button onClick={() => setModels((prev) => !prev)}>
                    Get Models
                </button>
            </section>
        </>
    );
}

export default App;
