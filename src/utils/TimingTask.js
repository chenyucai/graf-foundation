/**
 * 定时任务调度器
 */
class TimingTask {
    constructor (task, options, time) {
        this.timer = null
        this.time = time || 3000
        this.task = task
        this.callback = options.callback
        this.errorCallback = options.errorCallback
        this.count = 0
        this.hasStart = false
    }

    start () {
        if (!this.hasStart) {
            this.hasStart = true
            this.timer = setInterval(async () => {
                this.count++
                try {
                    let data = await this.task()
                    if (typeof this.callback === 'function') {
                        this.callback(data)
                    }
                } catch (err) {
                    if (typeof this.errorCallback === 'function') {
                        this.errorCallback(err)
                    }
                }
            }, this.time)
        }
    }

    stop () {
        if (this.timer) {
            clearInterval(this.timer)
        }
    }
}
