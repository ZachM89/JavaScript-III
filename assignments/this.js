/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Object Binding: This in global scope refers to the window you are in. Outside of any functions.
* 2. Umplicit Binding: Whenever a function is called by a preceeding dot, the object before that dot is this. I am not sure how to reword this so I will just write a stream of consciousness for a second. When you call
    a function from an object, if you say dog.speak(), then all the variables inside the function speak() that are preceeded with 'this.' (this.fur, this.tail, etc) they are referring to dog.
* 3. New Binding: When using a constructor, this refers to the property on the object being created.
* 4. Explicit Binding: 
*
* write out a code example of each explanation above
*/

// Principle 1
    //--Window/Global Object Binding
// code example for Window Binding
    const video = {
        title: 'interstellar',
        play() {
            console.log(this);
        }
    }

    video.play();
// Principle 2
    //--Implicit Binding
// code example for Implicit Binding
    const video2 = {
        title: 'interstellar',
        play() {
            console.log(this.title);
        }
    }

    video2.play();
// Principle 3
    //--New binding
// code example for New Binding
    function Vcr(movie) {
        this.title = movie,
        this.play = function() {
            console.log(this.title);
        }
    }

    const blockbuster = new Vcr('step brothers');

    blockbuster.play();
// Principle 4
    //--Explicit binding
// code example for Explicit Binding
    blockbuster.play.call('the prestige'); //??????????????????????????????????????