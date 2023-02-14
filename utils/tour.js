const Shepherd = require("../node_modules/shepherd.js/dist/js/shepherd");

const tour = new Shepherd.Tour({
    defaultStepOptions: {
        cancelIcon: {
            enabled: true,
            label: "Close Tour Button"
        },
        scrollTo: true
    },
    exitOnEsc: false,
    useModalOverlay: true
});
console.log(tour);
// tour.addSteps([{
//     text: `Welcome to Bullet Journal! Click the "Start" button to take a tour of the site.`,
//     title: `Start Tour`,
//     buttons: [{
//         label: "Start Button",
//         text: "Start",
//         action: () => {
//             tour.next();
//         }
//     }],
//     advanceOn: {
//         selector: `#create-journal`,
//         event: "click"
//     }
// }, {
//     text: `You can get started by creating a journal. Click the "Create Journal" button to begin.`,
//     title: `Create a Journal`,
//     attachTo: {
//         element: `#create-journal`,
//         on: "top"
//     },
//     buttons: [{
//         label: "Next Button",
//         text: "Next >",
//         action: () => {
//             tour.next();
//         }
//     }],
//     advanceOn: {
//         selector: `#create-journal`,
//         event: "click"
//     },
//     when: {
//         show() {
//           const currentStep = Shepherd.activeTour?.getCurrentStep();
//           const currentStepElement = currentStep?.getElement();
//           const footer = currentStepElement?.querySelector('.shepherd-footer');
//           const progress = document.createElement('span');
//           progress.className = 'shepherd-progress';
//           progress.innerText = `${Shepherd.activeTour?.steps.indexOf(currentStep)} of ${Shepherd.activeTour?.steps.length - 1}`;
//           footer?.insertBefore(progress, currentStepElement.querySelector('.shepherd-button:last-child'));
//         }
//       }
// }, {
//     text: `Enter a title and description for your journal. You can have as many journals as you want, so you can organize your thoughts by topic, time period, etc. You can also select a color for your journal--for color coding or just because.`,
//     title: `Enter Journal Information`,
//     attachTo: {
//         element: `#newJournal`,
//         on: "left"
//     },
//     buttons: [{
//         label: "Back Button",
//         text: "< Prev",
//         action: () => {
//             tour.back();
//             document.location.replace("..");
//         }
//     }, {
//         label: "Next Button",
//         text: "Next >",
//         action: () => {
//             tour.next();
//         }
//     }],
//     advanceOn: {
//         selector: `#newJournal`,
//         event: "submit"
//     },
//     when: {
//         show() {
//           const currentStep = Shepherd.activeTour?.getCurrentStep();
//           const currentStepElement = currentStep?.getElement();
//           const footer = currentStepElement?.querySelector('.shepherd-footer');
//           const progress = document.createElement('span');
//           progress.className = 'shepherd-progress';
//           progress.innerText = `${Shepherd.activeTour?.steps.indexOf(currentStep)} of ${Shepherd.activeTour?.steps.length - 1}`;
//           footer?.insertBefore(progress, currentStepElement.querySelector('.shepherd-button:last-child'));
//         }
//       }
// // }, {
// //     text: `HTML string or function returning an HTML string`,
// //     title: `String H3`,
// //     attachTo: {
// //         element: `#selector string or a function returning a selector`,
// //         on: "string: top, top-start, top-end..."
// //     },
// //     buttons: [{
// //         label: "Back Button",
// //         text: "< Prev",
// //         action: () => {
// //             tour.back();
// //         }
// //     }, {
// //         label: "Next Button",
// //         text: "Next >",
// //         action: () => {
// //             tour.next();
// //         }
// //     }],
// //     advanceOn: {
// //         selector: `.element`,
// //         event: "event"
// //     },
// //     showOn: () => {return "boolean"},
// //     when: {
// //         show() {
// //           const currentStep = Shepherd.activeTour?.getCurrentStep();
// //           const currentStepElement = currentStep?.getElement();
// //           const footer = currentStepElement?.querySelector('.shepherd-footer');
// //           const progress = document.createElement('span');
// //           progress.className = 'shepherd-progress';
// //           progress.innerText = `${Shepherd.activeTour?.steps.indexOf(currentStep)} of ${Shepherd.activeTour?.steps.length - 1}`;
// //           footer?.insertBefore(progress, currentStepElement.querySelector('.shepherd-button:last-child'));
// //         }
// //       }
// }]);

module.exports = tour;