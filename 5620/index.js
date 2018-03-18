var readlines = require('n-readlines');
var liner = new readlines('case.txt');

var edges_number = parseInt(liner.next().toString('utf8'));
var edges = [];
let next;
while (next = liner.next()) {
    let line = next.toString('utf8').split(' ')
    edges.push({
        x: parseInt(line[0]),
        y: parseInt(line[1]),
    });
}

var output = 0;

for (let i = 0 ; i < edges_number-1; i++) {
    for(let j=i+1; j < edges_number; j++) {
        if(!output)
            output = Math.pow(edges[i].x-edges[j].x, 2) + Math.pow(edges[i].y-edges[j].y, 2)
        else{
            if (Math.pow(edges[i].x-edges[j].x, 2) + Math.pow(edges[i].y-edges[j].y, 2) < output)
                output = Math.pow(edges[i].x-edges[j].x, 2) + Math.pow(edges[i].y-edges[j].y, 2)
        }
    }
}


console.log(output);