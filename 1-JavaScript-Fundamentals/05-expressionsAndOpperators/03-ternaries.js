//******************************** */ TERNARY *************************

// A GREAT WAY TO WRITE SINGLE LINE LOGIC

let w = 6

(w > 0) ? console.log('yes') : console.log('no');

// instead of multi-line: if (w.){console.log('yes')} blah blah

if(w == 0) {
    console.log('hey hey hey');
} else if(w<0){
    console.log('nah nah nah!')
} else {
    console.log('see ya later!')
}

(w == 0 ) ? console.log('hey hey hey') : (w < 0) ? console.log('nah nah' : console.log('see ya later!');)