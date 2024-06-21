CREATE MIGRATION m1hy42f2fzrg5h6v4ujyp7tukm4kxighqffyzyelz6vyputmv7zksq
    ONTO initial
{
  CREATE TYPE default::Exchange;
  CREATE TYPE default::Participant;
  ALTER TYPE default::Exchange {
      CREATE MULTI LINK participants: default::Participant;
  };
  ALTER TYPE default::Participant {
      CREATE LINK exchange := (.<participants[IS default::Exchange]);
  };
};
