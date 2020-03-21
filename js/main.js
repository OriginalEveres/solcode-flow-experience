const max_count = document.querySelectorAll('.screen-part').length;
let actual_count = 0;

let name, email, idea;

var screen_parts = document.querySelectorAll(".screen-part");

for (let i = 0; i < screen_parts.length; i++) {
    screen_parts[i].style.height = window.innerHeight + "px";
}

// this function slides to the next part view
function slide_down() {
    if (++actual_count > max_count) {
        actual_count = max_count;
    }
    document.getElementById('screen-part-wrapper').style.top = '-' +  actual_count + '00%';
}

// this function checks if that can slide down (inputs required)
function name_slide_down() {
    let name_input = document.getElementById('input-name');
    let email_input = document.getElementById('input-email');

    if (name_input.value != '' && email_input.value != '') {
        document.getElementById('user-name').innerHTML = name_input.value;
        name = name_input.value;
        email = email_input.value;
        slide_down();
    }
}

// function that checks availability of sliding down where input idea is presented
function idea_slide_down() {
    let idea_input = document.getElementById('input-idea');

    if (idea_input.value != '') {
        idea = idea_input.value;
        slide_down();
    }
}

function submit_ajax_form() {
    // this function launches on the submit
}
