import { IsDate, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @IsDate()
  date: string;

  @IsString()
  name: string;

  @IsString()
  @IsNotEmpty()
  things_i_am_grateful_for: string;

  @IsString()
  @IsNotEmpty()
  what_is_necessary_to_achieve_my_goals: string;

  @IsString()
  @IsNotEmpty()
  monthly_goals: string;

  @IsString()
  @IsNotEmpty()
  weekly_goals: string;

  @IsString()
  @IsNotEmpty()
  advice_received_today_reflection_and_improvements: string;

  @IsString()
  @IsNotEmpty()
  todo_list_for_tomorrow: string;

  @IsString()
  @IsNotEmpty()
  things_to_be_mindful_of_tomorrow: string;

  @IsString()
  @IsNotEmpty()
  evaluation_of_improvements_in_todays_actions: string;

  @IsString()
  @IsNotEmpty()
  todays_mood_and_thoughts: string;
}
