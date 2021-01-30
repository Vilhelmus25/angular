interface name {
    firstName: string;
    lastName: string;
    [propname: string]: any;         // propertyname: string, vagyis a kulcs string és az érték is string => pl.:            age: 22            any-vel már jó!
}

interface printFn {
    (nameParam: name): void;
}

class Greeter {
    fullName: string = "";
    skills: Array<{ name: string, point: number }> = [
        { name: "programming", point: 3 }
    ];
    readonly skill: string;
    constructor(nameObj: name, skill: string = "programming") {
        this.fullName = `${nameObj.lastName} ${nameObj.firstName}`;
        this.skill = skill;
    }

    greet() {
        return `Hello, my name is ${this.fullName}.`;
    }
}

let nameParam: name = { lastName: 'Vörös', firstName: 'Vilmos', age: 22 };

//g.skill = "reading";          // nem megengedett, mert readonly a skill


const printGreeting: printFn = function (nameParam: name) {
    let g: Greeter = new Greeter(
        nameParam,
        "dancing"
    );
    document.body.innerHTML = g.greet();
};

printGreeting(nameParam);


