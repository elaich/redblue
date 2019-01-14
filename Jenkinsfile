pipeline {
  agent {
    docker {
      image 'docker/compose:1.23.2'
    }
  }
  stages {
    stage('build') {
      steps {
        sh 'docker-compose --version'
        sh 'docker-compose up'
      }
    }
  }
}
