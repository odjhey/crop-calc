function createCrop1({ expenses , bayads  }) {
    return {
        expenses,
        bayads
    };
}
class Qty {
    value;
    uom;
    constructor(value1, uom){
        this.value = value1;
        this.uom = uom;
        Object.freeze(this);
    }
}
class Curr {
    value;
    curr;
    constructor(value2, curr){
        this.value = value2;
        this.curr = curr;
        Object.freeze(this);
    }
}
class Date1 {
    yyyy;
    dd;
    mm;
    constructor(yyyymmdd){
        this.yyyy = yyyymmdd.substring(0, 4);
        this.dd = yyyymmdd.substring(4, 6);
        this.mm = yyyymmdd.substring(6, 8);
        Object.freeze(this);
    }
}
const __default = {
    Date: Date1,
    Curr,
    Qty
};
function createExpense1({ date , description , qty , uom: uom1 , unitPrice , totalPrice , curr: curr1  }) {
    const common = {
        date: new __default.Date(date),
        qty: new __default.Qty(qty, uom1),
        description
    };
    if (unitPrice) {
        return {
            ...common,
            unitPrice: new __default.Curr(unitPrice, curr1),
            totalPrice: new __default.Curr(unitPrice * qty, curr1)
        };
    }
    if (totalPrice) {
        return {
            ...common,
            unitPrice: new __default.Curr(qty === 0 ? 0 : totalPrice / qty, curr1),
            totalPrice: new __default.Curr(totalPrice, curr1)
        };
    }
}
const addExpense1 = (expense, expenses)=>{
    return [
        ...expenses,
        expense
    ];
};
function sum1(currs) {
    const total = currs.reduce((total1, item)=>{
        if (!total1[item.curr]) {
            total1[item.curr] = new __default.Curr(0, item.curr);
        }
        total1[item.curr] = new __default.Curr(total1[item.curr].value + item.value, item.curr);
        return total1;
    }, {
    });
    return total;
}
function computeCrop1(crop) {
    const totalExpenses = sum1(crop.expenses.map((expense)=>expense.totalPrice
    ));
    return {
        totalExpenses
    };
}
export { createCrop1 as createCrop };
export { addExpense1 as addExpense, createExpense1 as createExpense };
export { sum1 as sum };
export { computeCrop1 as computeCrop };
