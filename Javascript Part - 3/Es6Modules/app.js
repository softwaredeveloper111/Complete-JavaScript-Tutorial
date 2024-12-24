// imagine you move that first line to other file and second line in other file
// export defult ek page mein ek hi ho sakta hai ,

import { firstName as fnmae } from "./utils/efname.js";
import { age } from "./utils/age.js";
import Person,{Person2} from "./utils/person.js"; // dont need curly braces bcz you use export default

// console.log(fnmae,age);
const p1= new Person('sourav','giri',23)
p1.info();


const p2=new Person2('anu','giri',12)
p2.info()