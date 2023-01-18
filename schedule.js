const schedule = require('node-schedule');

let scheduleObj = null;

const set = (s) => {
    let rule = new schedule.RecurrenceRule();
    rule.dayOfWeek = s.dayOfWeek;
    rule.hour = s.hour;
    rule.minute = s.minute;

    let job = schedule.scheduleJob(rule, () => {
        console.log('성공');
    });

    scheduleObj = job;
};

const cancel = () => {
    if (scheduleObj != null) {
        scheduleObj.cancel();
    }
};

const setScheduler = (s) => {
    cancel();
    set(s);
};

const scheduleData = {
    dayOfWeek: [3, 4],
    hour: 21,
    minute: 4,
};
setScheduler(scheduleData);
