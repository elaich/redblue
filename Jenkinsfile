pipeline {
  agent any
  stages {
    stage('build') {
      steps {
        sh 'docker-compose --version'
        sh 'docker-compose up'
      }
    }
  }
}
