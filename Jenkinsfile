pipeline {
  agent any
  stages {
    stage('build') {
      steps {
        sh 'docker-compose --version'
        sh 'docker-compose build'
        sh 'docker-compose -f docker-compose-ci.yml up -d'
      }
    }

    stage('test') {
      agent {
        docker { 
          image 'cypress/base:10' 
          args '--network=redblue_master_default'
        }
      }
      steps {
        sh './test.sh'
      }
    }
  }
}
