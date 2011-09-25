watch('(texts/.*\.md|index\.html\.erb)') { |match_data| system('rake generate_index') }
