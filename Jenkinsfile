pipeline {
  agent any
  stages {
    stage('build') {
      steps {
        sh 'docker-compose -f compose/base.yml up -d --build'
      }
    }

    stage('test') {
      agent {
        docker { 
          image 'cypress/base:10' 
          args '--network=compose_default'
        }
      }
      steps {
        sh './test.sh'
      }
    }

    stage('deploy') {
      steps {
        sh 'cat deploy.sh | ssh maro@redblue.doremicraft.com'
      }
    }
  }
}
