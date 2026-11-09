const multiplyValue = (value: number, multiplier?: number):number => {
    if (multiplier === 0) {
        return 0
    } else if (multiplier) {
        const result = value * multiplier;
        return result
    } else {
        const result = value * 2;
        return result
    }
}


const processInput = (value: string | number | boolean): string | number => {
    if (typeof value === 'string') {
        const result = value.trim().toLowerCase();
        return result
    } else if (typeof value === 'number') {
        const result = value * 10;
        return result
    } else {
        if (value) {
            return "Active"
        } else {
            return "Inactive"
        }
    }
}

const formatCoordinate = (location: readonly [latitude: number, longitude: number, locationName: string]): string => {
    const [latitude, longitude, locationName] = location;
    return `Location: ${locationName} (${latitude}, ${longitude})`
}

const concatenateArrays=<T>(...arrays: T[][]):T[]=>{
    const result:T[] = [];
    for(let items of arrays){
        for(let item of items){
            result.push(item)
        }
    }
    return result
}


interface Course{
    title:string,
    students:number,
    isPublished:boolean
}

const getPopularCourses=(Course:Course[],minStudents:number):Course[]=>{
    const newArray:Course[]=[];
    for(let course of Course){
        if(course.isPublished && course.students >= minStudents){
            newArray.push(course)
        }
    }
    
    return newArray
}


const pluckValues=<T, K extends keyof T>(items: T[],key: K):T[K][]=>{
    const result:T[K][] = [];
    for(let item of items){
        result.push(item[key])
    }
    return result
}

class Employee{
    protected name:string;
    private baseSalary:number;

    constructor(name:string, baseSalary:number){
        this.name = name;
        this.baseSalary = baseSalary;
    }
    getDetails():string{
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`
    }
}

class Manager extends Employee{
    private department:string;

    constructor(name:string,baseSalary:number,department:string){
        super(name,baseSalary);
        this.department = department;
    }
    getRoleInfo():string{
        return `Manager of ${this.department}: ${this.name}`
    }
}

const validateAgeAsync = async(age:number):Promise<string>=>{
    return new Promise((resolve,reject)=>{
        if(age>=18){
            setTimeout(()=>{
                resolve("Access Granted")
            },1000)
        }else{
            reject(new Error("Access Denied: Must be 18 or older"))
        }
    })
}

