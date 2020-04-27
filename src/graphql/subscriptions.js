/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($owner: String!) {
    onCreateUser(owner: $owner) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($owner: String!) {
    onUpdateUser(owner: $owner) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($owner: String!) {
    onDeleteUser(owner: $owner) {
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
export const onCreatePassport = /* GraphQL */ `
  subscription OnCreatePassport {
    onCreatePassport {
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
export const onUpdatePassport = /* GraphQL */ `
  subscription OnUpdatePassport {
    onUpdatePassport {
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
export const onDeletePassport = /* GraphQL */ `
  subscription OnDeletePassport {
    onDeletePassport {
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
export const onCreateRoute = /* GraphQL */ `
  subscription OnCreateRoute {
    onCreateRoute {
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
export const onUpdateRoute = /* GraphQL */ `
  subscription OnUpdateRoute {
    onUpdateRoute {
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
export const onDeleteRoute = /* GraphQL */ `
  subscription OnDeleteRoute {
    onDeleteRoute {
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
export const onCreateStage = /* GraphQL */ `
  subscription OnCreateStage {
    onCreateStage {
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
export const onUpdateStage = /* GraphQL */ `
  subscription OnUpdateStage {
    onUpdateStage {
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
export const onDeleteStage = /* GraphQL */ `
  subscription OnDeleteStage {
    onDeleteStage {
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
export const onCreateInterestPoint = /* GraphQL */ `
  subscription OnCreateInterestPoint {
    onCreateInterestPoint {
      id
      name
      description
      length
      x
      y
    }
  }
`;
export const onUpdateInterestPoint = /* GraphQL */ `
  subscription OnUpdateInterestPoint {
    onUpdateInterestPoint {
      id
      name
      description
      length
      x
      y
    }
  }
`;
export const onDeleteInterestPoint = /* GraphQL */ `
  subscription OnDeleteInterestPoint {
    onDeleteInterestPoint {
      id
      name
      description
      length
      x
      y
    }
  }
`;
