```
def jobName = "<YOUR_PIPELINE_NAME>"
def job = Jenkins.instance.getItem(jobName)
job.getBuilds().each { it.delete() }


// 以下为重置build number
job.updateNextBuildNumber(1)
```

