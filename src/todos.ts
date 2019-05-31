interface Todo {
    completed: boolean;
    id: string;
    title: string;
}
const data = [
    {
        completed: false,
        id: 'cjl0t6qt2000p3j10f6dd7jnk',
        title: 'index overriding Games',
    },
    {
        completed: false,
        id: 'cjl0t6qt4001d3j10pho0yqxy',
        title: 'target enhance asymmetric',
    },
    {
        completed: false,
        id: '3',
        title: 'title no 3',
    },
    {
        completed: false,
        id: '4',
        title: 'title no 4',
    },
    {
        completed: false,
        id: '5',
        title: 'title no 5',
    },
    {
        completed: false,
        id: '6',
        title: 'title no 6',
    },
    {
        completed: false,
        id: '7',
        title: 'title no 7',
    },
    {
        completed: false,
        id: '8',
        title: 'title no 8',
    },
    {
        completed: false,
        id: 'cjl0t6qt4001d3j10pho0yqxy',
        title: 'target enhance asymmetric',
    },
    {
        completed: false,
        id: 'cjl0t6qt4001d3j10pho0yqxy',
        title: 'target enhance asymmetric',
    },
    {
        completed: false,
        id: 'cjl0t6qt4001d3j10pho0yqxy',
        title: 'target enhance asymmetric',
    },
    {
        completed: false,
        id: 'cjl0t6qt4001d3j10pho0yqxy',
        title: 'target enhance asymmetric',
    },
];
export const allTodos = (_:any, { count }: { count: number}): Todo[] => {
    return data.slice(0, count);
};
