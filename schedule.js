const schedule = require('node-schedule');

let scheduleObj = null;

const set = (s) => {
    let rule = new schedule.RecurrenceRule();
    rule.dayOfWeek = s.dayOfWeek;
    rule.hour = s.hour;
    rule.minute = s.minute;

    let job = schedule.scheduleJob(rule, () => {
        console.log('하하');
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
    dayOfWeek: [4, 5],
    hour: 20,
    minute: 53,
};
setScheduler(scheduleData);
