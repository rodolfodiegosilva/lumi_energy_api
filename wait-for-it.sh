#!/usr/bin/env bash
# Use this script to test if a given TCP host/port are available

set -e

HOST="$1"
PORT="$2"
shift 2
cmd="$@"

# wait until the given host and port are available
echo "Waiting for $HOST:$PORT..."
until nc -z "$HOST" "$PORT"; do
  echo -n .
  sleep 1
done

echo "$HOST:$PORT is available"
exec $cmd
