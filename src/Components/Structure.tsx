import { useState } from 'react';
import { Model, Param } from '../App';

export interface Props {
    params: Param[];
    model: Model;
}

export default function Structure({ params, model }: Props) {
    const [types, setTypes] = useState(model.paramValues);
    const [visibility, setVisibility] = useState(false);

    function createSection(param: Param) {
        searchModel(param);

        return (
            <section
                key={param.id}
                className="grid grid-cols-2 items-center gap-y-[50px] w-[75%] self-center bg-slate-200 p-[15px] rounded-[5px]"
            >
                <h1>{param.name}</h1>

                <input
                    type="text"
                    value={types[param.id - 1].value}
                    onChange={(e) =>
                        handleSetTypes(e.target.value, param.id - 1)
                    }
                    className="input"
                />

                {visibility && getModel(param.id - 1)}
            </section>
        );
    }

    function getModel(id: number) {
        return (
            <pre className="flex flex-col gap-[15px] animate-opacity">
                <div>Params: {JSON.stringify(params[id], null, 2)}</div>
                <div>
                    Model: {JSON.stringify(model.paramValues[id], null, 2)}
                </div>
            </pre>
        );
    }

    function handleSetTypes(value: string, id: number) {
        const paramValues = model.paramValues;
        paramValues[id].value = value;
        setTypes([...paramValues]);
    }

    function searchModel(param: Param) {
        const paramValues = model.paramValues;

        for (let key in paramValues) {
            if (paramValues[key].paramId === param.id) {
                param.type = paramValues[key].value;
            }
        }
    }

    return (
        <>
            <button
                onClick={() => setVisibility((prev) => !prev)}
                className="btn"
            >
                {visibility ? 'Скрыть' : 'Показать'}
            </button>
            {params.map((param) => createSection(param))}
        </>
    );
}
