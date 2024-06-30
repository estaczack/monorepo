const Timestamp = {
  year: function (dt) {
    
    return '' + dt.getUTCFullYear()
  },

  month: function (dt) {
    let m = dt.getUTCMonth() + 1
    return m < 10 ? '0' + m : '' + m
  },

  day: function (dt) {
    let d = dt.getUTCDate()
    return d < 10 ? '0' + d : '' + d
  },

  hours: function (dt) {
    let h = dt.getUTCHours()
    return h < 10 ? '0' + h : '' + h
  },

  minutes: function (dt) {
    let m = dt.getUTCMinutes()
    return m < 10 ? '0' + m : '' + m
  },

  seconds: function (dt) {
    let s = dt.getUTCSeconds()
    return s < 10 ? '0' + s : '' + s
  },

  fullDate: function (dt) {
    return this.year(dt) + '-' + this.month(dt) + '-' + this.day(dt)
  },

  fullTime: function (dt) {
    return this.hours(dt) + ':' + this.minutes(dt) + ':' + this.seconds(dt)
  },

  fullTimestamp: function (dt) {
    return this.fullDate(dt) + ' ' + this.fullTime(dt)
  }
}

module.exports = Timestamp
