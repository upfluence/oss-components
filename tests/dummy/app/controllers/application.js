import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ApplicationController extends Controller {
  @tracked name = 'John';
  @tracked lastname = 'Doe';

  eg1 = `<OSS::InputContainer class="margin-bottom-sm" @value={{this.name}} />`;
  eg2 = `<OSS::InputContainer class="margin-bottom-sm" data-control-name="input-firstname"
                     @value={{this.name}}
                     @onChange={{this.onValueUpdated}}
                     @placeholder="Enter your first name"
                     @suffixAction={{this.onClear}}>
  <:prefix><i class="fas fa-user"></i></:prefix>
  <:suffix><i class="fas fa-times"></i></:suffix>
</OSS::InputContainer>`;
  eg3 = `<OSS::InputContainer class="margin-bottom-sm" data-control-name="input-firstname" @value={{this.name}}
                     @placeholder={{this.placeholder}}>
  <:prefix><i class="fas fa-user"></i></:prefix>
  <:suffix><i class="fa fa-check"></i></:suffix>
</OSS::InputContainer>`;
  eg4 = `<OSS::InputContainer class="margin-bottom-sm">
  <:prefix><i class="fas fa-user"></i></:prefix>
  <:input>
    <Input @value={{this.lastname}} placeholder="My fancy custom input" />
  </:input>
</OSS::InputContainer>`;
  eg5 = `<OSS::InputContainer class="margin-bottom-sm" data-control-name="input-firstname">
  <:input>
    <Input @value={{this.lastname}} placeholder="My fancy custom input" />
  </:input>
  <:suffix>
    {{#if (gt this.lastname.length 0)}}
      <i class="fa fa-check"></i>
    {{else}}
      <i class="fa fa-times"></i>
    {{/if}}
  </:suffix>
</OSS::InputContainer>`;

  onValueUpdated(value) {
    console.log(value);
  }

  @action
  onClear() {
    this.name = '';
  }
}
