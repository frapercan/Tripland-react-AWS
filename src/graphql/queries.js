/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: String!) {
    getUser(id: $id) {
      id
      nickname
      email
      name
      nameVisibility
      surname
      surnameVisibility
      birthday
      birthdayVisibility
      country
      countryVisibility
      location
      locationVisibility
      gender
      genderVisibility
      avatar
      description
      passportID
      passport {
        id
        nickname
        name
        surname
        avatar
        birthday
        country
        location
        description
        gender
      }
      owner
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $id: String
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listUsers(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        nickname
        email
        name
        nameVisibility
        surname
        surnameVisibility
        birthday
        birthdayVisibility
        country
        countryVisibility
        location
        locationVisibility
        gender
        genderVisibility
        avatar
        description
        passportID
        passport {
          id
          nickname
          name
          surname
          avatar
          birthday
          country
          location
          description
          gender
        }
        owner
      }
      nextToken
    }
  }
`;
export const getPassport = /* GraphQL */ `
  query GetPassport($id: ID!) {
    getPassport(id: $id) {
      id
      nickname
      name
      surname
      avatar
      birthday
      country
      location
      description
      gender
    }
  }
`;
export const listPassports = /* GraphQL */ `
  query ListPassports(
    $filter: ModelPassportFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPassports(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        nickname
        name
        surname
        avatar
        birthday
        country
        location
        description
        gender
      }
      nextToken
    }
  }
`;
export const getRoute = /* GraphQL */ `
  query GetRoute($id: ID!) {
    getRoute(id: $id) {
      id
      name
      description
      stages {
        id
        name
        description
        length
        interestPoints {
          id
          name
          description
          length
          x
          y
        }
      }
    }
  }
`;
export const listRoutes = /* GraphQL */ `
  query ListRoutes(
    $filter: ModelRouteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRoutes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        stages {
          id
          name
          description
          length
        }
      }
      nextToken
    }
  }
`;
export const getStage = /* GraphQL */ `
  query GetStage($id: ID!) {
    getStage(id: $id) {
      id
      name
      description
      length
      interestPoints {
        id
        name
        description
        length
        x
        y
      }
    }
  }
`;
export const listStages = /* GraphQL */ `
  query ListStages(
    $filter: ModelStageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        length
        interestPoints {
          id
          name
          description
          length
          x
          y
        }
      }
      nextToken
    }
  }
`;
export const getInterestPoint = /* GraphQL */ `
  query GetInterestPoint($id: ID!) {
    getInterestPoint(id: $id) {
      id
      name
      description
      length
      x
      y
    }
  }
`;
export const listInterestPoints = /* GraphQL */ `
  query ListInterestPoints(
    $filter: ModelInterestPointFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listInterestPoints(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        length
        x
        y
      }
      nextToken
    }
  }
`;
