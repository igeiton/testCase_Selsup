import './App.css';
import Structure from './Components/Structure';

export interface Param {
    id: number;
    name: string;
    type: string;
}

export type Color = string[];

export interface ParamValue {
    paramId: number;
    value: string;
}

export interface Model {
    paramValues: ParamValue[];
    colors: Color[];
}

export const paramsData: Param[] = [
    {
        id: 1,
        name: 'Назначение',
        type: '',
    },
    {
        id: 2,
        name: 'Длина',
        type: '',
    },
];

export const modelData: Model = {
    paramValues: [
        {
            paramId: 1,
            value: 'повседневное',
        },
        {
            paramId: 2,
            value: 'макси',
        },
    ],
    colors: [['red', 'green', 'blue']],
};

function App() {
    const params = paramsData;
    const models = modelData;

    return (
        <>
            <main className="flex flex-col gap-[15px]">
                <Structure params={params} model={models} />
            </main>
        </>
    );
}

export default App;
