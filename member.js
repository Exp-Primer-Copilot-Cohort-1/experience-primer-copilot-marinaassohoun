function skillsMember() {
  var skills = [
    {
      id: 1,
      name: 'Javascript',
      level: 'Advanced'
    },
    {
      id: 2,
      name: 'HTML',
      level: 'Advanced'
    },
    {
      id: 3,
      name: 'CSS',
      level: 'Advanced'
    }
  ];

  return {
    getSkills: function() {
      return skills;
    },
    getSkill: function(id) {
      for (var i = 0; i < skills.length; i++) {
        if (skills[i].id === id) {
          return skills[i];
        }
      }
      return null;
    }
  };
}