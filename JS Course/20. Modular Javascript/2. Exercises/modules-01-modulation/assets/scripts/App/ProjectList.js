// import { ProjectItem } from './ProjectItem.js';
import { ProjectItem as PrjItem } from './ProjectItem.js'; // we can use aliases to rename code that are relevant only in this file.
// import { DOMHelper } from '../Utility/DOMHelper.js'; // importing the whole class with the stuff in it
// import {DOMHelper, moveElement, clearEventListeners} from '../Utility/DOMHelper.js'; // importing the function. We can also import more than 1
import * as DOMHelp from '../Utility/DOMHelper.js'; // we can use * to bundle up everything into one file, with a name of our choice.


export class ProjectList {
  projects = [];

  constructor(type) {
    this.type = type;
    const prjItems = document.querySelectorAll(`#${type}-projects li`);
    for (const prjItem of prjItems) {
      this.projects.push(
        // new ProjectItem(prjItem.id, this.switchProject.bind(this), this.type)
        new PrjItem(prjItem.id, this.switchProject.bind(this), this.type)
      );
    }
    console.log(this.projects);
    this.connectDroppable();
  }

  connectDroppable() {
    const list = document.querySelector(`#${this.type}-projects ul`);

    list.addEventListener('dragenter', (event) => {
      if (event.dataTransfer.types[0] === 'text/plain') {
        list.parentElement.classList.add('droppable');
        event.preventDefault();
      }
    });

    list.addEventListener('dragover', (event) => {
      if (event.dataTransfer.types[0] === 'text/plain') {
        event.preventDefault();
      }
    });

    list.addEventListener('dragleave', (event) => {
      if (event.relatedTarget.closest(`#${this.type}-projects ul`) !== list) {
        list.parentElement.classList.remove('droppable');
      }
    });

    list.addEventListener('drop', (event) => {
      const prjId = event.dataTransfer.getData('text/plain');
      if (this.projects.find((p) => p.id === prjId)) {
        return;
      }
      document
        .getElementById(prjId)
        .querySelector('button:last-of-type')
        .click();
      list.parentElement.classList.remove('droppable');
      // event.preventDefault(); // not required
    });
  }

  setSwitchHandlerFunction(switchHandlerFunction) {
    this.switchHandler = switchHandlerFunction;
  }

  addProject(project) {
    this.projects.push(project);
    DOMHelp.moveElement(project.id, `#${this.type}-projects ul`);
    // moveElement(project.id, `#${this.type}-projects ul`);
    // DOMHelper.moveElement(project.id, `#${this.type}-projects ul`);
    project.update(this.switchProject.bind(this), this.type);
  }

  switchProject(projectId) {
    // const projectIndex = this.projects.findIndex(p => p.id === projectId);
    // this.projects.splice(projectIndex, 1);
    this.switchHandler(this.projects.find((p) => p.id === projectId));
    this.projects = this.projects.filter((p) => p.id !== projectId);
  }
}
