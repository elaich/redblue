pipeline {
  agent {
    docker {
      image 'docker/compose'
    }
  }
  stages {
    stage('build') {
      steps {
        sh 'docker-compose up'
      }
    }
  }
}
