var data = ["Monday", "Tuesday", "Thursday", "Friday", "sunday"];

let newData = data.splice(2, 1, "Wednesday", "Saturday");
console.log(newData);
console.log(data);