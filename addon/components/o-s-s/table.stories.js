import hbs from 'htmlbars-inline-precompile';

export default {
  title: 'Components/OSS::Table',
  layout: 'fullscreen',
  //component: 'tag',
  argTypes: {
    chevron: {
      description: 'Chevron table',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      },
      control: {
        type: 'boolean'
      }
    },
    _fakeContent: {
      control: false
    }
  }
};

const defaultArgs = {
  _fakeContent: new Array(5),
  chevron: false
};

const Template = (args) => ({
  template: hbs`
    <div class="upf-table-v2 {{if this.chevron 'upf-table-v2--chevron'}}">
      <div class="upf-table__headers">
        <div class="upf-table__cell">
          Header 1 <i class="fa fa-info-circle"></i>
        </div>
        <div class="upf-table__cell">
          Header 2
        </div>
        <div class="upf-table__cell">
          Header 3
        </div>
        <div class="upf-table__cell">
          Header 4
        </div>
        <div class="upf-table__cell">
          Header 5
        </div>
        <div class="upf-table__cell upf-table__cell--action">
        </div>
      </div>

      <div class="upf-table__content">
        {{#each this._fakeContent as |header index|}}
          <div class="upf-table__row">
            <div class="upf-table__cell">
              Content 1
            </div>
            <div class="upf-table__cell">Content 2</div>
            <div class="upf-table__cell">Content 3</div>
            <div class="upf-table__cell">Content 4</div>
            <div class="upf-table__cell upf-table__cell--tag">
              <OSS::Tag @label="Tag" />
            </div>
            <div class="upf-table__cell upf-table__cell--action">
              <i class="fa {{if this.chevron 'fa-chevron-right' 'fa-thumbs-up'}}"></i>
            </div>
          </div>
        {{/each}}
      </div>
    </div>
  `,
  context: args
});

export const Default = Template.bind({});
Default.args = {
  ...defaultArgs
};
