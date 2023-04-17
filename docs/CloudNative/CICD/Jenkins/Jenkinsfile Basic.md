# pipeline - Jenkinsfile

pipeline基本结构，其中黑框为必填选项：

<img src="https://agou-images.oss-cn-qingdao.aliyuncs.com/others/1240.png" alt="image.png" style="zoom:33%;" />

从一个简单的示例开始:

```bash
pipeline {
    agent any
    stages {
        stage('Example') {
            steps { 
                echo 'Hello World'
            }
        }
    }
}
```

## 关键字

https://www.jenkins.io/zh/doc/book/pipeline/syntax/

- agent:

```bash

```

## 常用选项说明

```bash
pipeline {
    agent any
    environment { 		// 全局变量
        CC = 'clang'
    }
    stages {
        stage('Example') {
            environment { 
                AN_ACCESS_KEY = credentials('my-prefined-secret-text') 		// 局部变量
            }
            steps {
                sh 'printenv'
            }
        }
    }
}
```

## 参考链接

- groovy documentation: http://groovy-lang.org/semantics.html
- pipeline syntax: https://www.jenkins.io/zh/doc/book/pipeline/syntax/
- Jenkins 最佳实践：https://github.com/jenkinsci/pipeline-examples/blob/master/docs/BEST_PRACTICES.md

