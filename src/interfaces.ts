export interface Param {
    id: number;
    name: string;
    type: string;
}

export interface ParamValue {
    paramId: number;
    value: string;
}

export interface Color {
    color: string;
}

export interface Model {
    paramValues: ParamValue[];
    colors: Color[];
}

export interface Props {
    params: Param[];
    model: Model;
}

export const model: Model = {
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
    colors: [
        {
            color: 'blue',
        },
    ],
};

export const params: Props = {
    params: [
        {
            id: 1,
            name: 'Назначение',
            type: 'string',
        },
        {
            id: 2,
            name: 'Длина',
            type: 'string',
        },
    ],
    model,
};
