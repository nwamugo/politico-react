[![CircleCI](https://circleci.com/gh/nwamugo/politico-react/tree/develop.svg?style=svg)](https://circleci.com/gh/nwamugo/politico-react/tree/develop)
[![Maintainability](https://api.codeclimate.com/v1/badges/2b887c5f95513c5b6d24/maintainability)](https://codeclimate.com/github/nwamugo/politico-react/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/2b887c5f95513c5b6d24/test_coverage)](https://codeclimate.com/github/nwamugo/politico-react/test_coverage)

# politico-react
A frontend implementation of the Politico application using Reactjs

Politico is a platform that enables citizens give their mandate to politicians running for different government offices while building trust in the process through transparency.

## Links to output

The REACT frontend UI is hosted on heroku [here](https://nwamugo-politico.herokuapp.com/)

The API is deployed on heroku [here](https://warm-mesa-86525.herokuapp.com/)

And a Pivotal Tracker Board you can find [here](https://www.pivotaltracker.com/n/projects/2238916)


### Implemented Features

* Citizens can sign up and login
* A Citizen's Profile Page
* Citizens can view all political parties


### Prerequisites

In developing this software, I set up

* a [Pivotal Tracker Board](https://www.pivotaltracker.com/n/projects/2238916) to manage the project using stories. For example, by using tickets as the one below...

```
Citizen should be able to sign up
```


### API Information

METHOD | DESCRIPTION | ENDPOINTS
-------|-------------|-----------
GET | Get all political parties | api/v1/parties
GET | Get a specific political party | api/v1/parties/party_id
GET | Get all political offices | /api/v1/offices
GET | Get a specific political office | api/v1/offices/office_id
POST | Create a political party | /api/v1/parties
POST | Create a political office | /api/v1/offices
PATCH | Edit a political party | /api/v1/parties/party_id/name
DELETE | Delete a political party | /api/v1/parties/party_id


## Running tests

Tests were written using [Jest](https://jestjs.io/) and [enzyme](https://airbnb.io/enzyme/) dev-dependencies

### end to end tests

Jest is a JavaScript testing framework designed to ensure correctness of any JavaScript codebase. while Enzyme is a JavaScript Testing utility for React that makes it easier to test your React Components' output. You can also manipulate, traverse, and in some ways simulate runtime given the output. For example

```
import React from 'react';
import { shallow } from 'enzyme';

import PartiesRow from './PartiesRow';

describe('<PartiesRow />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<PartiesRow />);
  });

  it('should render without errors', () => {
    expect(wrapper.exists()).toBe(true);
  });
});
```

### And coding style tests too

This project was built with the linter eslint and an [airbnb style guide](https://github.com/airbnb/javascript)

```
"rules": {
      "one-var": 0,
      "one-var-declaration-per-line": 0,
      "new-cap": 0,
      "consistent-return": 0,
      }
```

## Built With

* [ReactJS](https://reactjs.org/) - A JAvaScript Library for Web development


## Version Control

I use [Github](http://github.com/) for version control.

## Authors

* **Duziem Ugoji**


This project is a Duziem and Andela bootcamp project 2019

## Acknowledgments
