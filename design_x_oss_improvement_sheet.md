# Design X OSS improvement sheet

The goal of this document is to improve the consistency between the code and the design system, so the components can be found easily either in the code or in the design. It would greatly improve the efficiency of the communication between the developers and the designers.

## List of names not matching between OSS and design

This section aims to find out which components are not named the same between the design system and oss-components. This list is not exhaustive and needs to be completed.

| OSS Component           | Design Component                                  | Notes                                                        |
| ----------------------- | ------------------------------------------------- | ------------------------------------------------------------ |
| `OSS::Anchor`           | Link                                              | The OSS::Link component also exists                          |
| `OSS::ArrayInput`       | Input                                             | All Input OSS components map to a single design component.   |
| `OSS::ButtonDropdown`   | Button Split                                      |                                                              |
| `OSS::Tag`              | Chip/Franken Chip                                 |                                                              |
| `OSS::PowerSelect`      | Input/Input Multi Select                          |                                                              |
| `OSS::Select`           | Input/Input Select                                |                                                              |
| `OSS::Pill`             | Pill/Smart Pill                                   | OSS has a generic Pill, but design only has Smart Pill.      |
| `OSS::StarRating`       | Rating                                            | OSS::Rating component exists without a corresponding design. |
| `OSS::NavTab`           | Tab                                               |                                                              |
| `OSS::TogglableSection` | ToggleableSection                                 | Frontend typo                                                |
| `OSS::Slider`           | Slider/SingleValueSlider, RangeSlider, SliderItem | OSS::Slider matches SingleValueSlider only                   |
| `OSS::ContextMenu`      | Dropdown/ContextMenu                              | OSS::ContextMenu includes the button, Figma design doesn't   |

## List of design files including more than one component

Several Figma files contain more than one component. As it is impossible to link only part of a file to a Story, it is difficult to know for sure which part of the design matches the Storybook component.
Here is a non exhaustive list of files including more than one component:

`ArrayInput`/`InputContainer`/`InputGroup`/`URLInput`/`CurrencyInput`/`EmailInput`/`TextArea`... are all in the same _Input_ file.

`Banner` and `BannerMarketing` are in the same _Banner_ file.

`UploadItem` and `UploadArea` are in the same _File Upload_ file.

`Modal` and `SplitModal` are in the same _Modal_ file.

## Sorting out Dropdowns and Select components

A confusion exists between the different Select / Dropdown components. Matching the OSS components with the design system is not always straightforward.

This table aims to disclose the best match between components and designs.

| OSS Component                   | Design Component                          | Notes                                                                    |
| ------------------------------- | ----------------------------------------- | ------------------------------------------------------------------------ |
| `OSS::Smart::Immersive::Select` | ?                                         |                                                                          |
| `OSS::ContextMenu`              | Dropdown/ContextMenu                      | OSS::ContextMenu includes the button, Figma design doesn't               |
| `OSS::Select`                   | Input/InputSelect, Input/InputMultiSelect |                                                                          |
| `OSS::InfiniteSelect`           | Dropdown/Dropdown                         | Dropdown/DropdownSelect is the version of Dropdown with a selected value |
| `OSS::PowerSelect`              | ?                                         |                                                                          |
