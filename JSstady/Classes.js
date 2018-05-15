// JavaScript source code
class SelectionModel {
    constructor() {
        this.CreationDate = new Date();
    }
}

class MarketModel {
    constructor() {
        this.Selections = [];
        this.CreationDate = new Date();
    }
}

class MatchModel {
    constructor() {
        this.CreationDate = new Date();
    }
}

class MatchMemberModel {
    constructor() {
        this.CreationDate = new Date();
    }
}

class TeamModel {
    constructor() {
        this.CreationDate = new Date();
    }
}

class MatchStatModel {
    constructor() {
        this.PeriodScores = [];
        this.EventScores = new Map();
    }
}

class ScoreModel {

}

const EventType = Object.freeze({
    Corner: Symbol("Corner"),
    Yellowcard: Symbol("Yellowcard"),
    Redcard: Symbol("Redcard"),
    ShotOnTarget: Symbol("ShotOnTarget"),
    ShotOffTarget: Symbol("ShotOffTarget"),
    DangerousAttack: Symbol("DangerousAttack"),
    Aces: Symbol("Aces"),
    DoubleFault: Symbol("DoubleFault"),
    Penalty: Symbol("Penalty"),
    FreeKick: Symbol("FreeKick"),
    ExtraTime: Symbol("ExtraTime")
});

class LeagueModel {
    constructor() {
        this.Matches = [];
        this.CreationDate = new Date();
    }
}

class RegionModel {
    constructor() {
        this.Leagues = [];
    }
}

class SportModel {
    constructor() {
        this.Regions = [];
    }
}

class BookmakerModel {
    constructor() {
        this.Sports = [];
        this.CreationDate = new Date();
    }
}