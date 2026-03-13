# List of names not matching between OSS and design

This document aims to find out which components are not named the same between the design system and oss-components. This list is not exhaustive and needs to be completed.

The final goal is to improve the consistency between the code and the design system, so the components can be found easily either in the code or in the design. It would greatly improve the efficiency of the communication between the developers and the designers.

| OSS Component         | Design Component         | Notes                                                        |
| --------------------- | ------------------------ | ------------------------------------------------------------ |
| `OSS::Anchor`         | Link                     | The OSS::Link component also exists                          |
| `OSS::ArrayInput`     | Input                    | All Input OSS components map to a single design component.   |
| `OSS::ButtonDropdown` | Button Split             |                                                              |
| `OSS::Tag`            | Chip/Franken Chip        |                                                              |
| `OSS::PowerSelect`    | Input/Input Multi Select |                                                              |
| `OSS::Select`         | Input/Input Select       |                                                              |
| `OSS::Pill`           | Pill/Smart Pill          | OSS has a generic Pill, but design only has Smart Pill.      |
| `OSS::StarRating`     | Rating                   | OSS::Rating component exists without a corresponding design. |

The input components included in the Input design are (non exhaustive list): `ArrayInput`/`InputContainer`/`InputGroup`/`URLInput`/`CurrencyInput`/`EmailInput`/`TextArea`...
