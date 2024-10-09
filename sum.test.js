const sum = require("./sum")

test("Somar dois numeros positivos", () =>{
    expect (sum(1,2)).toBe(3)
})

test("atribuição de objeto", () =>{
    const data = {one: 1}
    data["two"] = 2
    expect(data).toEqual({ one : 1, two : 2})
})

test("verificação se nao da zero", () =>{
    for (let a = 1; a <= 10; a++){
        for(let b = 1; b <= 10; b++){
            expect(a+b).not.toBe(0)
        }
    }
})