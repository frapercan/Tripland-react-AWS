/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createPassport = /* GraphQL */ `
  mutation CreatePassport(
    $input: CreatePassportInput!
    $condition: ModelPassportConditionInput
  ) {
    createPassport(input: $input, condition: $condition) {
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
export const updatePassport = /* GraphQL */ `
  mutation UpdatePassport(
    $input: UpdatePassportInput!
    $condition: ModelPassportConditionInput
  ) {
    updatePassport(input: $input, condition: $condition) {
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
export const deletePassport = /* GraphQL */ `
  mutation DeletePassport(
    $input: DeletePassportInput!
    $condition: ModelPassportConditionInput
  ) {
    deletePassport(input: $input, condition: $condition) {
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
export const createRoute = /* GraphQL */ `
  mutation CreateRoute(
    $input: CreateRouteInput!
    $condition: ModelRouteConditionInput
  ) {
    createRoute(input: $input, condition: $condition) {
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
export const updateRoute = /* GraphQL */ `
  mutation UpdateRoute(
    $input: UpdateRouteInput!
    $condition: ModelRouteConditionInput
  ) {
    updateRoute(input: $input, condition: $condition) {
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
export const deleteRoute = /* GraphQL */ `
  mutation DeleteRoute(
    $input: DeleteRouteInput!
    $condition: ModelRouteConditionInput
  ) {
    deleteRoute(input: $input, condition: $condition) {
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
export const createStage = /* GraphQL */ `
  mutation CreateStage(
    $input: CreateStageInput!
    $condition: ModelStageConditionInput
  ) {
    createStage(input: $input, condition: $condition) {
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
export const updateStage = /* GraphQL */ `
  mutation UpdateStage(
    $input: UpdateStageInput!
    $condition: ModelStageConditionInput
  ) {
    updateStage(input: $input, condition: $condition) {
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
export const deleteStage = /* GraphQL */ `
  mutation DeleteStage(
    $input: DeleteStageInput!
    $condition: ModelStageConditionInput
  ) {
    deleteStage(input: $input, condition: $condition) {
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
export const createInterestPoint = /* GraphQL */ `
  mutation CreateInterestPoint(
    $input: CreateInterestPointInput!
    $condition: ModelInterestPointConditionInput
  ) {
    createInterestPoint(input: $input, condition: $condition) {
      id
      name
      description
      length
      x
      y
    }
  }
`;
export const updateInterestPoint = /* GraphQL */ `
  mutation UpdateInterestPoint(
    $input: UpdateInterestPointInput!
    $condition: ModelInterestPointConditionInput
  ) {
    updateInterestPoint(input: $input, condition: $condition) {
      id
      name
      description
      length
      x
      y
    }
  }
`;
export const deleteInterestPoint = /* GraphQL */ `
  mutation DeleteInterestPoint(
    $input: DeleteInterestPointInput!
    $condition: ModelInterestPointConditionInput
  ) {
    deleteInterestPoint(input: $input, condition: $condition) {
      id
      name
      description
      length
      x
      y
    }
  }
`;
