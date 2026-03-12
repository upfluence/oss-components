# List of names not matching between OSS and design

This document aims to find out which components are not named the same between the design system and oss-components. This list is not exhaustive and needs to be completed.

The final goal is to improve the consistency between the code and the design system, so the components can be found easily either in the code or in the design. It would greatly improve the efficiency of the communication between the developers and the designers.

- `OSS::Anchor` -> Link
  - /!\ `OSS::Link` also exists
- `OSS::ArrayInput`/`InputContainer`/`InputGroup`/`URLInput`/`CurrencyInput`/`EmailInput`/`TextArea`... -> Input
  - All Inputs are in the same Input file in the designs
- `OSS::ButtonDropdown` -> Button Split
- `OSS::Tag` -> Chip/Franken Chip
- `OSS::PowerSelect` -> Input/Input Multi Select
- `OSS::Select` -> Input/Input Select
- `OSS::Pill` -> Pill/Smart Pill
  - only the Smart Pill design exists
- `OSS::StarRating` -> Rating
  - OSS::StarRating and OSS::Rating are two very similar components. There is no design for `OSS::Rating`
