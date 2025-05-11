export function useMath() {
    let a = 10;
    let b = 20;

    function add() {
        return a + b;
    }

    function del() {
        return a - b;
    }

    return {
        a,
        b,
        add,
        del
    }
}