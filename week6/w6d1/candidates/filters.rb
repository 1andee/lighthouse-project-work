# Enumeration with Candidates
# Lighthouse Labs web-ft-tor-29may2017
#
# In this file we define the methods to help filter out candidates
# This way, we keep these methods separated from other potential parts
# of the program

def experienced?(candidate)
  candidate[:years_of_experience] >= 2
end

def find(id)
  @candidates.find {|candidate| candidate[:id] == id}
end

def enough_pts?(candidate)
  candidate[:github_points] >= 100
end

def language?(candidate)
  candidate[:languages].include?('Ruby' || 'Python')
end

def applied_recently?(candidate)
  candidate[:date_applied] >= 15.days.ago.to_date
end

def old_enough?(candidate)
  candidate[:age] >= 18
end

def qualified_candidates
  @candidates.select do |candidate|
    if experienced?(candidate) == true &&
      enough_pts?(candidate) == true &&
      language?(candidate) == true &&
      applied_recently?(candidate) == true &&
      old_enough?(candidate) == true
      pp candidate
    end
  end
end

# more methods will go here:

def sort_by_qualifications(candidates)
  # sort by years_of_experience
  # then sort by github_points
end
