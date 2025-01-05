(()=>{

    //* Aplicar el principio de responsabilidad única
    //* Priorizar la composición frente a la herencia

    type HtmlType = 'input'|'select'|'textarea'|'radio';
   
    class HtmlElement {
        constructor(
            public id: string,
            public type: HtmlType,
        ) {}
    }

    class InputAttributes {
        constructor(
            public value: string,
            public placeholder: string,
        ) {}
    }

    interface ImputElementsProps {
        id: string 
        type: HtmlElement 
        value: string 
        placeholder: string
    }

    class ImputEvents {

        constructor() {}

        setFocus() {};
        getValue() {};
        isActive() {};
        removeValue() {};
    }


    //? Idea para la nueva clase InputElement

    class InputElement {
        public html: HtmlElement;
        public attributes: InputAttributes;
        public events: ImputEvents;

        constructor(value: string, placeholder: string, id: string ) {
            this.html = new HtmlElement(id, "input");
            this.attributes = new InputAttributes(value, placeholder);
            this.events = new ImputEvents()
        }
    }


    const nameField = new InputElement('Fernando', 'Enter first name', 'txtName');

    console.log({ nameField });

})()