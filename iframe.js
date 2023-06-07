import {css, html, LitElement, styleMap} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js';

export class SampleIframe extends LitElement {
    // Define scoped styles right with your component, in plain CSS
    static styles = css`  //Add custom CSS. See https://help.nintex.com/en-US/formplugins/Reference/Style.htm
      :host {
        height: 100%;
        width: 100%;
        display: block;
      }

      .frame {
        display: inline-block;
        height: 100%;
        width: 100%;
        background-color: transparent;
        border: none;
      }
    `;

    static getMetaConfig() {
        // plugin contract information
        return {
            controlName: 'IFrame-new',
            fallbackDisableSubmit: false,
            description: 'IFrame component which can render url view with the frame',
            iconUrl: "one-line-text",
            groupName: 'Visual',
            version: '1.3',
            properties: { //Custom configuration fields. See https://help.nintex.com/en-US/formplugins/Reference/CustomField.htm
                src: {
                    type: 'string',
                    title: 'Source URL',
                    description: 'URL of the iframe, please note many sites block been rendered in iframes'
                },
                height: {
                    type: 'string',
                    title: 'Height',
                    description: 'Height of the component',
                }
            },
            standardProperties: {
                readOnly: true,  //Add a read-only mode. See https://help.nintex.com/en-US/formplugins/Reference/ReadOnly.htm
                required: true,
                description: true,
            }
        };
    }

    static properties = {
        name: 'Hello',
        title: 'Hello',
        src: 'https://www.wikipedia.org/',
        height: '100%'
    }

    // Render the UI as a function of component state
    render() {
        let styles = {height: this.height};

        return html`
            <body>
                <form action="/submit_form" method="post">
                    <label for="fname">First Name:</label><br>
                    <input type="text" id="fname" name="fname"><br>
                    <label for="lname">Last Name:</label><br>
                    <input type="text" id="lname" name="lname"><br>
                    <input type="submit" value="Submit">
                </form>
            </body>`;
    }

}

// registering the web component.
const elementName = 'sample-iframe';
customElements.define(elementName, SampleIframe);
