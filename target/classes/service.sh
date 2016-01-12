#!/usr/bin/env bash
### BEGIN INIT INFO
# Provides: ${project.artifactId}
# Required-Start:
# Required-Stop:
# Default-Start:  2 3 4 5
# Default-Stop: 0 1 6
# Short-Description: Spring Boot Application ${project.artifactId}
# Description: ${project.artifactId} service
### END INIT INFO
cd /himex/services/${project.artifactId}/
source /etc/sysconfig/himexubi > /dev/null 2>&1
su ${project.artifactId} -c "/usr/lib/jvm/jre-1.8.0/bin/java -jar -Dspring.profiles.active=$SPRING_PROFILES_ACTIVE ./${project.artifactId}-${project.version}.jar $1" &
